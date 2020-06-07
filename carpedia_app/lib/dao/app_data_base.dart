import 'dart:async';
import 'package:carpediaapp/dao/favourite_car_dao.dart';
import 'package:carpediaapp/models/favourite_car.dart';
import 'package:floor/floor.dart';
import 'package:sqflite/sqflite.dart' as sqflite;

part 'app_data_base.g.dart'; // the generated code will be there

@Database(version: 1, entities: [FavouriteCar])
abstract class AppDatabase extends FloorDatabase {
  FavouriteCarDao get favouriteCarDao;

}