import 'package:carpediaapp/dataSources/api_client.dart';
import 'package:carpediaapp/models/car_response.dart';

class CarRepository {


  Future<List<CarResponse>> getCarForName(String name) => client.getCarForName(name);

  Future<List<CarResponse>> getCarForCompany(String name) => client.getCarForCompany(name);
}
