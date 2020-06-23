import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/repositories/data_base_repository.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:carpediaapp/test/ping_test.dart';
import 'package:flutter/material.dart';
import 'package:bloc_pattern/bloc_pattern.dart';

import 'package:carpediaapp/screens/main_content.dart';
import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:carpediaapp/repositories/car_repository.dart';

import 'dao/app_data_base.dart';

void main() => runApp(MyApp());



class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => MyAppState();
}

class MyAppState extends State<MyApp> {

  ThemeBloc _themeBloc;

  @override
  void initState() {
    var pingTest = PingTest();
    pingTest.test();
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_){
      setState(() {
        _themeBloc = BlocProvider.getBloc();
      });

    } );
  }

  void onDarkModeValue(bool bool){
    if(bool){
      _themeBloc.selectedTheme.add(_buildDarkTheme());
    }
    else{
      _themeBloc.selectedTheme.add(_buildLightTheme());
    }
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      blocs: _blocs,
      dependencies: _dependencies,

      child: StreamBuilder<ThemeData>(
        stream: _themeBloc?.selectedThemeStream,
        builder: (context, snapshot) {
          return MaterialApp(
            title: 'Carpedia-App',
            debugShowCheckedModeBanner: false,
            theme: snapshot.data,
            home: MainContent()
           // home: MainContent(),
          );
        }
      ),
    );
  }

  List<Bloc> get _blocs => [
    Bloc((i) => CarBloc(i.get())),
    Bloc((i) => ThemeBloc(i.get())),
    Bloc((i) => DataBaseBloc(i.get()))
  ]; // Block

  List<Dependency> get _dependencies => [
    Dependency((_) => DataBaseRepository()),
    Dependency((_) => CarRepository())
  ];
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

}
