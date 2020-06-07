import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/screens/favourite_screen.dart';
import 'package:carpediaapp/screens/main_content.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/screens/theme_selector_page.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:carpediaapp/screens/theme_selector_page.dart';
import 'package:flutter/services.dart';

class NavDrawer extends StatefulWidget {
  final ThemeBloc themeBloc;
  @override
  _NavDrawerState createState() => _NavDrawerState();
  NavDrawer({Key key, this.themeBloc}) : super(key: key);
}

class _NavDrawerState extends State<NavDrawer> {

  ThemeBloc _themeBloc;

  DataBaseBloc _dataBaseBloc;

  @override
  void initState() {
    super.initState();
    _themeBloc = BlocProvider.getBloc();
    _dataBaseBloc = BlocProvider.getBloc();

    if(_themeBloc.selectedTheme.value?.name == "light"){
      _lights = false;
    }
    else{
      _lights = true;
    }
  }

  DemoTheme _buildLightTheme() {
    return DemoTheme(
        'light',
        ThemeData(
          brightness: Brightness.light,
          accentColor: Colors.lightBlueAccent,
          primaryColor: Colors.lightBlue,
        ));
  }

  DemoTheme _buildDarkTheme() {
    return DemoTheme(
        'dark',
        ThemeData(
          brightness: Brightness.dark,
          accentColor: Colors.lightBlueAccent,
          primaryColor: Colors.blue[800],
        ));
  }

  bool _lights = false;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(
              'Carpedia',
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
            decoration: BoxDecoration(
                color: Colors.green,
                image: DecorationImage(
                    fit: BoxFit.fill,
                    image: AssetImage('assets/PP00.jpg'))),
          ),

          ListTile(
            leading: Padding(child: Icon(Icons.home), padding: EdgeInsets.only(left: 2),),
            title: Text('Home'),
            onTap: () {
              Navigator.of(context).pop();
              if (ModalRoute.of(context).isCurrent) return;
                Navigator.of(context).pushReplacement(MaterialPageRoute(
                    builder: (context) => MainContent()));
              },
          ),

          ListTile(
            leading: Padding(child: Icon(Icons.favorite), padding: EdgeInsets.only(left: 2),),
            title: Text('Favourite'),
            onTap: () {
              Navigator.of(context).push(MaterialPageRoute(
                builder: (context) => FavouriteScreen()));},
          ),

          SwitchListTile(
            title: const Text('Dark Mode'),
            activeColor: Theme.of(context).accentColor,
            value: _lights,
            onChanged: (bool value) {onSwitchStateChange(); },
            secondary: _lights ? Image.asset('assets/zarowa0.png', width: 30,) : Image.asset('assets/zarowa1.png', width: 30,),
          )
        ],
      ),
    );

   // _themeBloc.selectedTheme.add(_buildDarkTheme());
  }

  void onSwitchStateChange(){
    setState(() {
      _lights = !_lights;
    });

    if(_lights){
       setState(() {
         _themeBloc.selectedTheme.add(_buildDarkTheme());
       });
    }
    else{
      _themeBloc.selectedTheme.add(_buildLightTheme());
    }
  }
}
