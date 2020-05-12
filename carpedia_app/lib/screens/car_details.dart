import 'package:flutter/material.dart';
import 'package:carpediaapp/models/car_response.dart';

class CarDetailsScreen extends StatelessWidget {
  final CarResponse _car;
  CarDetailsScreen(this._car);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(_title)
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
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
        foregroundDecoration: BoxDecoration(
          image: DecorationImage(image: NetworkImage('https://d-mf.ppstatic.pl/art/f5/ev/bg8wuvsc8co8osgo44wsw/ferrari-3.1200.jpg'), fit: BoxFit.fill),
        ),
        width: double.infinity,
        height: MediaQuery.of(context).size.longestSide * 0.3,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
        ),
      )],
  );

  Widget get _detailsCard => Container(
    width: double.infinity,
    child: Card(
      child: Row(
        children: <Widget>[
          Expanded(
            flex: 11,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: <Widget>[
                Padding(child: Text("Model", style: TextStyle(color: Colors.lightBlue, fontWeight: FontWeight.bold, fontSize: 20)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Marka", style: TextStyle(color: Colors.lightBlueAccent, fontSize: 16)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Kraj"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Start produkcji"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Koniec produkcji"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Typ nadwozia"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Gwiazdki NCAP"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
              ],
            ),
          ),
          Expanded(
            flex: 11,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(child: Text(_x, style: TextStyle(color: Colors.lightBlue, fontWeight: FontWeight.bold, fontSize: 20)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Marka", style: TextStyle(color: Colors.lightBlueAccent, fontSize: 16)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Kraj"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("2323"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("1212"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("kupę"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("cztery i puł"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
              ],
            ),
          ),
        ],
      ),
    ), padding: EdgeInsets.all(1),
  );

  String get _title => _x;
  String get _x => _car.name;


  Widget get _mainInfo => Text(
    'x',
    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24, color: Colors.white),
  );



}
