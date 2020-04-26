import 'package:flutter/material.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:bloc_pattern/bloc_pattern.dart';

class ThemeSelectorPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => ThemeSelectorPageState();
}

class ThemeSelectorPageState extends State<ThemeSelectorPage> {
  ThemeBloc _themeBloc;

  @override
  void initState() {
    super.initState();
    _themeBloc = BlocProvider.getBloc();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Theme Selector',
        ),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: <Widget>[
              RaisedButton(
                onPressed: () =>
                    _themeBloc.selectedTheme.add(_buildLightTheme()),
                child: Text(
                  'Light theme',
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 8.0),
                child: RaisedButton(
                  onPressed: () =>
                      _themeBloc.selectedTheme.add(_buildDarkTheme()),
                  child: Text(
                    'Dark theme',
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  DemoTheme _buildLightTheme() {
    return DemoTheme(
        'light',
        ThemeData(
          brightness: Brightness.light,
          accentColor: Colors.deepOrange,
          primaryColor: Colors.cyanAccent,
        ));
  }

  DemoTheme _buildDarkTheme() {
    return DemoTheme(
        'dark',
        ThemeData(
          brightness: Brightness.dark,
          accentColor: Colors.lightBlueAccent,
          primaryColor: Colors.pink,
        ));
  }
}
