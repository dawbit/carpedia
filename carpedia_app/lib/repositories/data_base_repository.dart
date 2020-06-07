import 'package:carpediaapp/dao/app_data_base.dart';
import 'package:carpediaapp/dao/favourite_car_dao.dart';
import 'package:carpediaapp/models/favourite_car.dart';
import 'package:floor/floor.dart';

class DataBaseRepository{
  FavouriteCarDao dao;



  DataBaseRepository(){
    $FloorAppDatabase
        .databaseBuilder('flutter_database.db')
        .build().then((f) {
          this.dao = f.favouriteCarDao;
    });
  }

  Future deleteFavouriteCar(FavouriteCar car) async{
  await dao.deleteFavouriteCar(car);
  }

  Future insertFavouriteCar(FavouriteCar car) async {
  await  dao.insertFavouriteCar(car);
  }

  Future<List<FavouriteCar>> getAllDataBaseCars() =>  dao.findAllCars();

  Future<void> deletexd() => dao.deleteFavouriteCarxd();

  Future<bool> checkIfPositionExists(int id) async {
    final exists = await dao.checkIfPositionExists(id);
    if(exists!=null){
      return true;
    }
    else{
      return false;
    }
  }
}