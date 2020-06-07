import 'package:dio/dio.dart';
import 'package:retrofit/retrofit.dart';

import 'package:carpediaapp/models/car_response.dart';

part 'api_client.g.dart';

final client = ApiClient(Dio());

@RestApi(baseUrl: 'http://192.168.43.228:8080/car')
abstract class ApiClient {

  factory ApiClient(Dio dio, {String baseUrl}) = _ApiClient;

  @GET("/name/{name}")
  Future<List<CarResponse>> getCarForName(@Path() String name);

  @GET("/company/{name}")
  Future<List<CarResponse>> getCarForCompany(@Path() String name);
}
