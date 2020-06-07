import 'package:carpediaapp/models/favourite_car.dart';
import 'package:floor/floor.dart';

@dao
abstract class FavouriteCarDao{
  @Query('SELECT * FROM FavouriteCar')
  Future<List<FavouriteCar>> findAllCars();

  @Insert()
  Future<void> insertFavouriteCar(FavouriteCar car);

  @delete
  Future<void> deleteFavouriteCar(FavouriteCar car);

  @Query('DELETE FROM FavouriteCar where id > 0')
  Future<void> deleteFavouriteCarxd();

  @Query('SELECT * FROM FavouriteCar where id = :id')
  Future<FavouriteCar> checkIfPositionExists(int id);
}