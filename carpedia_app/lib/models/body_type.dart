
import 'package:json_annotation/json_annotation.dart';

part 'body_type.g.dart';

@JsonSerializable()
class BodyType {


  @JsonKey(name: "id")
  int id;
  @JsonKey(name: "name")
  String bodyTypeName;


  BodyType();

  //https://flutter.dev/docs/development/data-and-backend/json
  factory BodyType.fromJson(Map<String, dynamic> json) => _$BodyTypeFromJson(json);
  Map<String, dynamic> toJson() => _$BodyTypeToJson(this);
}