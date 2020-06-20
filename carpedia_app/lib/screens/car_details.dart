import 'package:flutter/material.dart';
import 'package:carpediaapp/models/car_response.dart';

class CarDetailsScreen extends StatefulWidget {

  final CarResponse _car;
  CarDetailsScreen(this._car);

  @override
  _CarDetailsScreenState createState() => _CarDetailsScreenState();
}

class _CarDetailsScreenState extends State<CarDetailsScreen> {

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("${widget._car.company.companyName} ${widget._car.model}")
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
          image: DecorationImage(
              image: widget._car.photo!= null ? NetworkImage('${widget._car.photo}') : NetworkImage('https://assets.puzzlefactory.pl/puzzle/213/347/original.jpg'),
              fit: BoxFit.fill),
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
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(child: Text("Model:", style: TextStyle(color: Colors.lightBlue, fontWeight: FontWeight.bold, fontSize: 20)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Marka:", style: TextStyle(color: Colors.lightBlueAccent, fontSize: 16)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Kraj:"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Start produkcji:"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Koniec produkcji:"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Typ nadwozia:"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("Gwiazdki NCAP:"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
              ],
            ),
          ),
          Expanded(
            flex: 11,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(child: Text("${widget._car.model}", style: TextStyle(color: Colors.lightBlue, fontWeight: FontWeight.bold, fontSize: 20)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.company.companyName}", style: TextStyle(color: Colors.lightBlueAccent, fontSize: 16)), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.company.country.countryName}"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.startproduction}"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.endproduction}"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.bodyType.bodyTypeName}"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
                Padding(child: Text("${widget._car.ncapStars}"), padding: EdgeInsets.fromLTRB(15, 5, 5, 0),),
              ],
            ),
          ),
        ],
      ),
    ), padding: EdgeInsets.all(1),
  );

  String get _title => _x;
//  String get _x => _car.name;
  String get _x => "_car.name";


  Widget get _mainInfo => Text(
    'x',
    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24, color: Colors.white),
  );


}
