import 'package:flutter/material.dart';
import 'package:bloc_pattern/bloc_pattern.dart';

import 'package:carpediaapp/screens/main_content.dart';
import 'package:carpediaapp/blocks/car_block.dart';
import 'package:carpediaapp/repositories/car_repository.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      blocs: _blocs,
      dependencies: _dependencies,
      child: MaterialApp(
        title: 'Carpedia-App',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MainContent(),
      ),
    );
  }

  List<Bloc> get _blocs => [
    Bloc((i) => CarBloc(i.get()))
  ]; // Block

  List<Dependency> get _dependencies => [
    Dependency((_) => CarRepository())
  ]; // Dependency

}