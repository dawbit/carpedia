import 'dart:async';

import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/models/body_type.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/models/company.dart';
import 'package:carpediaapp/models/country.dart';
import 'package:carpediaapp/models/favourite_car.dart';
import 'package:carpediaapp/widgets/slide_menu.dart';
import 'package:flutter/material.dart';

import 'list_of_cars.dart';

class FavouriteScreen extends StatefulWidget {
  @override
  _FavouriteScreenState createState() => _FavouriteScreenState();
}

class _FavouriteScreenState extends State<FavouriteScreen> {

  DataBaseBloc _dataBaseBloc;
  StreamSubscription _streamSubscription;
  List<CarResponse> listOfCars;

  @override
  void initState() {
    _dataBaseBloc = BlocProvider.getBloc();
    listOfCars= [];
    _streamSubscription = _dataBaseBloc.carObservable.listen(onData);
    _dataBaseBloc.getCars();
    super.initState();
  }

  void onData(List<FavouriteCar> cars){
    CarResponse carResponse = CarResponse();

    cars.forEach((f){
      Company company = Company();
      company.companyName = f.model;
      Country country = Country();
      country.countryName = f.country;
      company.country=country;
      BodyType type = BodyType();
      type.bodyTypeName = f.bodyType;
      carResponse.id = f.id;
      carResponse.model = f.model;
      carResponse.company = company;
      carResponse.bodyType= type;
      carResponse.startproduction = f.startProduction;
      carResponse.endproduction = f.endProduction;
      carResponse.ncapStars = f.ncapStars;
      carResponse.photo = f.photo;
      setState(() {
        listOfCars.add(carResponse);
      });
    });

  }

  @override
  void dispose() {
    _streamSubscription.cancel();
    listOfCars.clear();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Favourite'),
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Expanded(child: CarList(favCars: listOfCars),flex:1) ],
        )
    );;
  }
}
