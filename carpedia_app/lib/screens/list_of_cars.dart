import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/data_base_bloc.dart';
import 'package:carpediaapp/models/favourite_car.dart';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:flutter/widgets.dart';
import 'package:fluttertoast/fluttertoast.dart';

class CarList extends StatefulWidget {

  List<CarResponse> favCars;

  CarList({this.favCars});

  @override
  _CarListState createState() => _CarListState();
}

class _CarListState extends State<CarList> {

    CarBloc _carBloc;
    List<CarResponse> listOfCars;
    List<CarResponse> listOfCarsmodel;
    List<CarResponse> listOfCarsmark;
    StreamSubscription _streamSubscriptionAdd;
    StreamSubscription _streamSubscriptionAdd2;



  @override
  void initState() {

    _carBloc = BlocProvider.getBloc();
    listOfCars= [];
    _streamSubscriptionAdd = _carBloc.searchStream.listen(onDataChanged1,
        onError: message);
    _streamSubscriptionAdd2 = _carBloc.searchStream2.listen(onDataChanged2,
    onError: message
    );
    if(widget.favCars!=null){
      setState(() {
        listOfCars = widget.favCars;
      });
    }
    super.initState();
  }

  void message(e){
    Fluttertoast.showToast(
        msg: "Connection Timeout",
        toastLength: Toast.LENGTH_LONG,
        gravity: ToastGravity.BOTTOM,
        backgroundColor: Colors.red,
        textColor: Colors.black,
        fontSize: 16.0
    );
  }

  void onDataChanged1(List<CarResponse> carResponse){
    listOfCarsmodel=carResponse;
    if(listOfCarsmodel.isNotEmpty || listOfCarsmark.isEmpty){
      setState(() {
        listOfCars = carResponse;
      });
    }
    else if (listOfCarsmodel.isEmpty || listOfCarsmark.isEmpty){
      setState(() {
        listOfCars = carResponse;
      });
    }
  }
    void onDataChanged2(List<CarResponse> carResponse){
    listOfCarsmark= carResponse;
      if(listOfCarsmodel.isEmpty || listOfCarsmark.isNotEmpty){
        setState(() {
          listOfCars = carResponse;
        });
      }
      else if (listOfCarsmodel.isEmpty || listOfCarsmark.isEmpty){
        setState(() {
          listOfCars = carResponse;
        });
      }
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
          CarListItem(car: listOfCars[position], key: ValueKey(listOfCars[position].id)),
    );
  }
}

class CarListItem extends StatefulWidget {

  CarResponse car;
  Function delete;

  CarListItem({this.car, this.delete, Key key}): super(key:key);

  @override
  State<StatefulWidget> createState() {
    return CarListItemState();
  }
}

class CarListItemState extends State<CarListItem> {
  bool _isfavorited = false;


  DataBaseBloc _dataBaseBloc;
  Image _image;

  @override
  void initState() {

    _dataBaseBloc = BlocProvider.getBloc();
    _dataBaseBloc.checkIfPositionExists(widget.car.id).then((onValue){
      setState(() {
        _isfavorited = onValue;
      });
    });
    if(widget.car.photo!=null) _image = Image.network(widget.car.photo, height: 150, width: 150,);
    else _image = Image.network("https://assets.puzzlefactory.pl/puzzle/213/347/original.jpg", height: 150, width: 150,);
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
        child: InkWell(
          onTap: (){ Navigator.of(context).push(MaterialPageRoute(
              builder: (context) => CarDetailsScreen(widget.car)));},
          child: Card(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                SizedBox(width: 20,),
                Expanded(
                    flex: 0,
                    child: _image
                ),
                SizedBox(width: 20,),
                Expanded(
                  flex: 69,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 27,),
                      Padding(child: Text("${widget.car.company.companyName}", style: TextStyle(color: Theme.of(context).primaryColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                      Padding(child: Text("${widget.car.model}", style: TextStyle(color: Theme.of(context).accentColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                      Padding(child: Text("${widget.car.endproduction}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    ],
                  ),
                ),
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
      if(widget.delete!=null){
        widget.delete(widget.car);
      }
    }
    else{
      _dataBaseBloc.insert(favCar);
    }
  }
}