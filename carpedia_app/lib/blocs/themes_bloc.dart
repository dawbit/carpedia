import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/repositories/data_base_repository.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';
import 'dart:async';

class DemoTheme {
  final String name;
  final ThemeData data;

  const DemoTheme(this.name, this.data);
}

class ThemeBloc extends BlocBase {

  final selectedTheme = BehaviorSubject<DemoTheme>();
  Stream<ThemeData> get selectedThemeStream => selectedTheme.stream.map((theme) => theme.data);
  final DataBaseRepository dataBaseRepository;


  ThemeBloc(this.dataBaseRepository){
    selectedTheme.add(_buildLightTheme());
  }

  @override
  void dispose() {
    super.dispose();
    selectedTheme.close();
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
}
