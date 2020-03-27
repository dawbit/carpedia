import 'package:json_annotation/json_annotation.dart';

part 'car_response.g.dart';

@JsonSerializable()
class CarResponse {
  //List<company> car;
  String name;
  //@JsonKey(name: 'company')
  //Company company;
  CarResponse({this.name});

  //https://flutter.dev/docs/development/data-and-backend/json
  factory CarResponse.fromJson(Map<String, dynamic> json) => _$CarResponseFromJson(json);
  Map<String, dynamic> toJson() => _$CarResponseToJson(this);
}
