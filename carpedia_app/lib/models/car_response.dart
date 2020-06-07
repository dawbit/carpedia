
import 'package:carpediaapp/models/favourite_car.dart';
import 'package:json_annotation/json_annotation.dart';

import 'body_type.dart';
import 'company.dart';
import 'country.dart';

part 'car_response.g.dart';

@JsonSerializable()
class CarResponse {


  @JsonKey(name: "id")
  int id;
  @JsonKey(name: "name")
  String model;
  @JsonKey(name: "company")
  Company company;
  @JsonKey(name: "startproduction")
  String startproduction;
  @JsonKey(name: "endproduction")
  String endproduction;
  @JsonKey(name: "ncap")
  int ncapStars;
  @JsonKey(name: "photo")
  String photo;
  @JsonKey(name: "bodytype")
  BodyType bodyType;


  CarResponse();


  //https://flutter.dev/docs/development/data-and-backend/json
  factory CarResponse.fromJson(Map<String, dynamic> json) => _$CarResponseFromJson(json);
  Map<String, dynamic> toJson() => _$CarResponseToJson(this);
}