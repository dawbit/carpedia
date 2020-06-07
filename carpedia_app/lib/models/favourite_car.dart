import 'package:carpediaapp/models/car_response.dart';
import 'package:floor/floor.dart';

@entity
class FavouriteCar {

  @primaryKey
  final int id;

  final String mark;
  final String model;
  final String country;
  final String startProduction;
  final String endProduction;
  final String bodyType;
  final int ncapStars;
  final String photo;

  FavouriteCar({this.id, this.model,this.photo,this.ncapStars,this.bodyType,this.country,this.mark,this.endProduction,this.startProduction});

}