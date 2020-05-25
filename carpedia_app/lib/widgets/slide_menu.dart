import 'package:carpediaapp/screens/favourite_screen.dart';
import 'package:carpediaapp/screens/main_content.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/screens/theme_selector_page.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:flutter/services.dart';

class NavDrawer extends StatelessWidget {
  final ThemeBloc themeBloc;
  NavDrawer({Key key, this.themeBloc}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(
              'Side menu',
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
            decoration: BoxDecoration(
                color: Colors.green,
                image: DecorationImage(
                    fit: BoxFit.fill,
                    image: AssetImage('assets/PP00.jpg'))),
          ),
          ListTile(
            leading: Icon(Icons.input),
            title: Text('Welcome'),
            onTap: () {Navigator.of(context).pushReplacement(MaterialPageRoute(
                builder: (context) => MainContent()));},
          ),
          ListTile(
            leading: Icon(Icons.verified_user),
            title: Text('Favourite'),
            onTap: () => Navigator.of(context).push(MaterialPageRoute(
                builder: (context) => FavouriteScreen())),
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('Dark Mode'),
            onTap: () =>  Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => ThemeSelectorPage())),
          ),
          ListTile(
            leading: Icon(Icons.exit_to_app),
            title: Text('todo'),
            onTap: () {SystemNavigator.pop();},
          ),
        ],
      ),
    );
  }
}
