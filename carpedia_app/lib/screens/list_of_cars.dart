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
          CarListItem(position, "mark", "model", "yest"),
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
            children: <Widget>[
              Image.network('https://i.stack.imgur.com/lkd0a.png%27', height: 200, width: 200,),
              Column(
                children: <Widget>[
                  Text("sdgsdg", style: TextStyle(color: Colors.green, fontWeight: FontWeight.bold)),
                  Text("sdgsdg", style: TextStyle(color: Colors.green),),
                  Text("sdgsdg", style: TextStyle(color: Colors.green),),
                  Text("sdgsdg", style: TextStyle(color: Colors.green),),
                ],
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