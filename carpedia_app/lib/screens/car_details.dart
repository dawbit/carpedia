import 'package:flutter/material.dart';
import 'package:carpediaapp/models/car_response.dart';

class CarDetailsScreen extends StatelessWidget {
  final CarResponse _car;
  CarDetailsScreen(this._car);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: _title
      ),
      body: Column(
        children: <Widget>[
          _getTopContainer(context),
          _detailsCard
        ],
      ),
    );
  }

  Widget _getTopContainer(context) => Stack(
    children: <Widget>[
      Container(
        width: double.infinity,
        height: MediaQuery.of(context).size.longestSide * 0.3,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
        ),
        child: Column(
          children: <Widget>[
            _mainInfo
          ],
        ),
      ),
    ],
  );

  Widget get _detailsCard => Card(
    margin: const EdgeInsets.all(30.0),
    child: Padding(
      padding: const EdgeInsets.all(30.0),
      child: Column(
        children: <Widget>[
          _x,
        ],
      ),
    ),
  );

  Widget get _title => Text('title');

  Widget get _x => Text(_car.name);


  Widget get _mainInfo => Text(
    'x',
    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24, color: Colors.white),
  );



}
