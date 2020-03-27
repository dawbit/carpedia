import 'dart:async';
import 'package:rxdart/rxdart.dart';

import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/repositories/car_repository.dart';

class CarBloc extends BlocBase {
  final CarRepository _carRepository;

  CarBloc(this._carRepository);

  BehaviorSubject<CarResponse> _carSubject = BehaviorSubject();
  Stream<CarResponse> get carObservable => _carSubject.stream;

  BehaviorSubject<bool> _loadingCarSubject = BehaviorSubject();
  Stream<bool> get loadingCarObservable => _loadingCarSubject.stream;

  Future getCarForName(String name) async {
    _loadingCarSubject.add(true);
    _carRepository.getCarForName(name)
        .then(_onCarSuccess)
        .catchError(_onCarError);
  }

  Future _onCarSuccess(List<CarResponse> car) async {
    _loadingCarSubject.add(false);
    _carSubject.add(car[0]);
  }

  Future _onCarError(e) async {
    _loadingCarSubject.add(false);
    _carSubject.addError(e);
  }

  @override
  void dispose() {
    super.dispose();
    _carSubject.close();
    _loadingCarSubject.close();
  }
}
