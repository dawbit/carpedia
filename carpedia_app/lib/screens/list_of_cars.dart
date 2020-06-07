import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/themes_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:flutter/widgets.dart';

class CarList extends StatefulWidget {

  @override
  _CarListState createState() => _CarListState();
}

class _CarListState extends State<CarList> {
  List<String> lista = [];
  List<String> marka = ["Toyota", "Toyota", "Toyota"];
  List<String> model =["Yaris", "Aygo", "Avensis"];


  @override
  void initState() {
    lista.add("https://comfortcar.pl/images/detailed/1/avensis.jpg");
    lista.add("https://t1-cms-2.images.toyota-europe.com/toyotaone/plpl/toyota-aygo-header-mobile_tcm-1015-1492639.jpg");
    lista.add("https://t1-cms-1.images.toyota-europe.com/toyotaone/plpl/oyota-yaris-classic-header-full-v1_tcm-1015-1673600.jpg");
    super.initState();
  }
  
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 3,
      itemBuilder: (_, position) =>
          CarListItem(position, "Toyota", model[position], "1997", lista[position]),
    );
  }
}

class CarListItem extends StatefulWidget {
  final int position;
  final String mark;
  final String model;
  final String year;
  final String image;

  CarListItem(this.position, this.mark, this.model, this.year, this.image);

  @override
  State<StatefulWidget> createState() {
    return CarListItemState();
  }
}

class CarListItemState extends State<CarListItem> {
  bool _isfavorited = false;

  ThemeBloc _themeBloc;

  @override
  void initState() {
    _themeBloc = BlocProvider.getBloc();
    super.initState();
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
                  child: Image.network("${widget.image}", height: 150, width: 150, )),
              SizedBox(width: 20,),
              Expanded(
                flex: 69,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    SizedBox(height: 27,),
                    Padding(child: Text("${widget.mark}", style: TextStyle(color: Theme.of(context).primaryColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    Padding(child: Text("${widget.model}", style: TextStyle(color: Theme.of(context).accentColor, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    Padding(child: Text("${widget.year}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
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
                  onPressed: _toogleFavorite,
                ),
              ),
            ],
          )
        ));
  }

  void _toogleFavorite() {
    setState(() {
      _isfavorited = !_isfavorited;
    });
  }
}