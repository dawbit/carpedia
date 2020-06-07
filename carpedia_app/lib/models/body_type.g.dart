// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'body_type.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

BodyType _$BodyTypeFromJson(Map<String, dynamic> json) {
  return BodyType()
    ..id = json['id'] as int
    ..bodyTypeName = json['name'] as String;
}

Map<String, dynamic> _$BodyTypeToJson(BodyType instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.bodyTypeName,
    };
