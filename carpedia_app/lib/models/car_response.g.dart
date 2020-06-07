// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'car_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CarResponse _$CarResponseFromJson(Map<String, dynamic> json) {
  return CarResponse()
    ..id = json['id'] as int
    ..model = json['name'] as String
    ..company = json['company'] == null
        ? null
        : Company.fromJson(json['company'] as Map<String, dynamic>)
    ..startproduction = json['startproduction'] as String
    ..endproduction = json['endproduction'] as String
    ..ncapStars = json['ncap'] as int
    ..photo = json['photo'] as String
    ..bodyType = json['bodytype'] == null
        ? null
        : BodyType.fromJson(json['bodytype'] as Map<String, dynamic>);
}

Map<String, dynamic> _$CarResponseToJson(CarResponse instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.model,
      'company': instance.company,
      'startproduction': instance.startproduction,
      'endproduction': instance.endproduction,
      'ncap': instance.ncapStars,
      'photo': instance.photo,
      'bodytype': instance.bodyType,
    };
