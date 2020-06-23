import 'dart:async';
import 'package:rxdart/rxdart.dart';

import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/repositories/car_repository.dart';

class CarBloc extends BlocBase {
  CarRepository _carRepository;

  PublishSubject<String> _searchSubject = PublishSubject();
  Stream<List<CarResponse>> searchStream;

  PublishSubject<String> _searchSubject2 = PublishSubject();
  Stream<List<CarResponse>> searchStream2;

  BehaviorSubject<bool> _timeoutSubject = BehaviorSubject();
  Stream<bool> get carObservable => _timeoutSubject.stream;

  CarBloc(this._carRepository){
    searchStream = _searchSubject
        .debounceTime(Duration(seconds: 1))
        .switchMap((query) => query != ''
        ? _carRepository.getCarForName(query).asStream()
        : Stream.fromIterable([[]]));

    searchStream2 = _searchSubject2
        .debounceTime(Duration(seconds: 1))
        .switchMap((query) => query != ''
        ? _carRepository.getCarForCompany(query).asStream()
        : Stream.fromIterable([[]]));
  }



  Function(String name) get getCarForName => _searchSubject.add;

  Function(String name) get getCarForCompany => _searchSubject2.add;


  @override
  void dispose() {
    super.dispose();
  }
}
