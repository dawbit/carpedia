import 'package:json_annotation/json_annotation.dart';

import 'country.dart';

part 'company.g.dart';

@JsonSerializable()
class Company {

  @JsonKey(name: "id")
  int id;
  @JsonKey(name: "name")
  String companyName;
  @JsonKey(name: "foundation")
  int foundationDate;
  @JsonKey(name: "country")
  Country country;


  Company();

  factory Company.fromJson(Map<String, dynamic> json) => _$CompanyFromJson(json);
  Map<String, dynamic> toJson() => _$CompanyToJson(this);
}