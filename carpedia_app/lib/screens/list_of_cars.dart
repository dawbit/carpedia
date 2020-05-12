import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:flutter/widgets.dart';

class CarList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (_, position) =>
          CarListItem(position, "Toyota chuj kowola bydlak 11cm kwadratowych", "Supra", "1997"),
    );
  }
}

class CarListItem extends StatefulWidget {
  final int position;
  final String mark;
  final String model;
  final String year;

  CarListItem(this.position, this.mark, this.model, this.year);

  @override
  State<StatefulWidget> createState() {
    return CarListItemState();
  }
}

class CarListItemState extends State<CarListItem> {
  bool _isfavorited = false;

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
              Expanded(
                  flex: 0,
                  child: Image.network('https://i.stack.imgur.com/lkd0a.png%27', height: 150, width: 150,)),
              Expanded(
                flex: 69,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Padding(child: Text("${widget.mark}", style: TextStyle(color: Colors.lightBlueAccent, fontWeight: FontWeight.bold)), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
                    Padding(child: Text("${widget.model}"), padding: EdgeInsets.fromLTRB(5, 5, 5, 0),),
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