import 'package:flutter/material.dart';
import 'package:bloc_pattern/bloc_pattern.dart';

import 'package:carpediaapp/screens/main_content.dart';
import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:carpediaapp/repositories/car_repository.dart';

void main() => runApp(MyApp());


class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => MyAppState();
}

class MyAppState extends State<MyApp> {

  ThemeBloc _themeBloc;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_){
      setState(() {
        _themeBloc = BlocProvider.getBloc();
      });
    } );
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
            home: MainContent(),
          );
        }
      ),
    );
  }

  List<Bloc> get _blocs => [
    Bloc((i) => CarBloc(i.get())),
    Bloc((_) => ThemeBloc())
  ]; // Block

  List<Dependency> get _dependencies => [
    Dependency((_) => CarRepository())
  ]; // Dependency
}
