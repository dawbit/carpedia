import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';

import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/models/favourite_car.dart';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:flutter/widgets.dart';

class CarList extends StatefulWidget {

  List<CarResponse> favCars;

  CarList({this.favCars});

  @override
  _CarListState createState() => _CarListState();
}

class _CarListState extends State<CarList> {

    CarBloc _carBloc;
    List<CarResponse> listOfCars;
    StreamSubscription _streamSubscriptionAdd;
    StreamSubscription _streamSubscriptionAdd2;



  @override
  void initState() {

    _carBloc = BlocProvider.getBloc();
    listOfCars= [];
    _streamSubscriptionAdd = _carBloc.searchStream.listen(onDataChanged);
    _streamSubscriptionAdd2 = _carBloc.searchStream2.listen(onDataChanged);
    if(widget.favCars!=null){
      setState(() {
        listOfCars = widget.favCars;
      });
    }
    super.initState();
  }

  void onDataChanged(List<CarResponse> carResponse){
    setState(() {
      listOfCars = carResponse;
    });
  }

  @override
  void dispose() {
    _streamSubscriptionAdd.cancel();
    _streamSubscriptionAdd2.cancel();
    listOfCars = [];
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: listOfCars.length ?? 0,
      itemBuilder: (_, position) =>
          CarListItem(car: listOfCars[position]),
    );
  }
}

class CarListItem extends StatefulWidget {

  CarResponse car;

  CarListItem({this.car});

  @override
  State<StatefulWidget> createState() {
    return CarListItemState();
  }
}

class CarListItemState extends State<CarListItem> {
  bool _isfavorited = false;


  DataBaseBloc _dataBaseBloc;

  @override
  void initState() {
    _dataBaseBloc = BlocProvider.getBloc();
    _dataBaseBloc.checkIfPositionExists(widget.car.id).then((onValue){
      setState(() {
        _isfavorited = onValue;
      });
    });
    super.initState();
  }



  void onData(bool bool){
    setState(() {
      _isfavorited=bool;
    });
  }
  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(4.0),
        child: Card(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              SizedBox(width: 20,),
              Expanded(
                  flex: 0,
                  child: Image.network("https://assets.puzzlefactory.pl/puzzle/213/347/original.jpg", height: 150, width: 150, )),
              SizedBox(width: 20,),
              Expanded(
                flex: 69,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    SizedBox(height: 27,),
                    Padding(child: Text("${widget.car.company}", style: TextStyle(color: Theme.of(context).primaryColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    Padding(child: Text("${widget.car.model}", style: TextStyle(color: Theme.of(context).accentColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    Padding(child: Text("${widget.car.ncapStars}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                  ],
                ),
              ),
                Expanded(
                  flex: 69,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Padding(child: Text("${widget.car.company.companyName}", style: TextStyle(color: Colors.lightBlueAccent, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                      Padding(child: Text("${widget.car.model}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                      Padding(child: Text("${widget.car.endproduction}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    ],
                  ),
                ),
                Spacer(),
                Expanded(
                  flex: 0,
                  child: IconButton(
                    padding: EdgeInsets.all(25.0),
                    icon: (_isfavorited ? Icon(Icons.star) : Icon(Icons.star_border)),
                    alignment: Alignment.centerRight,
                    color: Theme.of(context).accentColor,
                    onPressed: (){
                      _toogleFavorite();
                      },
                  ),
                ),
              ],
            )
          ),
        );
  }

  void _toogleFavorite() {

    final car = widget.car;

    final favCar =FavouriteCar(
        id:car.id,
        bodyType: car.bodyType.bodyTypeName,
        country: car.company.country.countryName,
        endProduction: car.endproduction,
        mark: car.company.companyName,
        model: car.model,
        ncapStars: car.ncapStars,
        photo: car.photo,
        startProduction: car.startproduction
    );

    setState(() {
      _isfavorited = !_isfavorited;
    });

    if(!_isfavorited){
      _dataBaseBloc.delete(favCar);
    }
    else{
      _dataBaseBloc.insert(favCar);
    }
  }
}