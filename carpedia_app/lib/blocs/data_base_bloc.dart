import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/dao/app_data_base.dart';
import 'package:carpediaapp/dao/favourite_car_dao.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/models/favourite_car.dart';
import 'package:carpediaapp/repositories/data_base_repository.dart';
import 'package:rxdart/rxdart.dart';

class DataBaseBloc extends BlocBase{

  final DataBaseRepository dataBaseRepository;

  DataBaseBloc(this.dataBaseRepository);

  BehaviorSubject<List<FavouriteCar>> _carSubject = BehaviorSubject();
  Stream<List<FavouriteCar>> get carObservable => _carSubject.stream;


  Future insert(FavouriteCar car){
    dataBaseRepository.insertFavouriteCar(car);
  }

  Future delete(FavouriteCar car){
    dataBaseRepository.deleteFavouriteCar(car);
  }

  Future getCars(){
    dataBaseRepository.getAllDataBaseCars().then(onValue);
  }

  void onValue(List<FavouriteCar> cars){
    if(cars!=null) {
      _carSubject.add(cars);
    }
  }

  Future deletexd(){
    dataBaseRepository.deletexd();
  }

  Future<bool> checkIfPositionExists(int id) async{
    return await dataBaseRepository.checkIfPositionExists(id);
  }


}