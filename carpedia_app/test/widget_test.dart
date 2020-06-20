// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility that Flutter provides. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:carpediaapp/models/body_type.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/models/company.dart';
import 'package:carpediaapp/models/country.dart';
import 'package:carpediaapp/repositories/car_repository.dart';
import 'package:carpediaapp/repositories/data_base_repository.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:carpediaapp/screens/favourite_screen.dart';
import 'package:carpediaapp/screens/list_of_cars.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:carpediaapp/main.dart';

import 'package:carpediaapp/main.dart';

void main() {
  testWidgets('Counter increments smoke test', (WidgetTester tester) async {

    var lalalalalalalal=  _dependencies;
    var xd = Dependency((_) => DataBaseRepository());

    _dependencies.add(xd);

    var sth = CarResponse();
    var xdd = Company();
    var bt = BodyType();
    var cccc = Country();
    xdd.country = cccc;
    cccc.countryName="asgags";
    bt.bodyTypeName= "asgasg";
    xdd.companyName= "asggasg";

    sth.company = xdd;
    sth.model= " ";
    sth.id= 136;
    sth.photo= " ";
    sth.bodyType= bt;
    sth.startproduction= "1234";
    sth.endproduction= "!1254";
    sth.ncapStars= 5;


    // Build our app and trigger a frame.
    await tester.pumpWidget(buildTse(CarListItem(car: sth,), dep: lalalalalalalal));

    await expectLater(find.byType(CarListItem),
    matchesGoldenFile('main.png'));

    await tester.pumpWidget(buildTse(CarListItem(car: sth), dep: lalalalalalalal));

    await expectLater(find.byType(CarListItem), matchesGoldenFile('main.png'));
  });

}

Widget buildTse(Widget xd, {List<Dependency> dep}) => MediaQuery(
  data: MediaQueryData(),
  child: BlocProvider(
      dependencies: dep,
      blocs: _blocs,
      child: xd),
);

List<Bloc> get _blocs => [
  Bloc((i) => CarBloc(i.get())),
  Bloc((i) => ThemeBloc(i.get())),
  Bloc((i) => DataBaseBloc(i.get()))
]; //

List<Dependency> get _dependencies => [
  Dependency((_) => CarRepository())
];
