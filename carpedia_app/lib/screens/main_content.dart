import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';
import 'package:carpediaapp/screens/search_input.dart';
import 'package:carpediaapp/screens/list_of_cars.dart';
import 'package:carpediaapp/widgets/slide_menu.dart';

class MainContent extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => MainContentState();
}

class MainContentState extends State<MainContent> {
  TextEditingController _searchController;
  CarBloc _carBloc;
  StreamSubscription _carSubscription;

  @override
  void initState() {
    super.initState();
    _searchController = TextEditingController();
    _carBloc = BlocProvider.getBloc();
    _carSubscription = _carBloc.carObservable.listen(_navigateToDetails);
  }

  @override
  void dispose() {
    super.dispose();
    _carSubscription.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: NavDrawer(),
        appBar: AppBar(
          title: Text('Carpedia app'),
        ),
        body: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Expanded(child: SearchInput(), flex: 0,),
            Expanded(child: CarList(),flex:1) ],
        ));
  }

  var rowTemplate = Row(
    children: <Widget>[SearchInput(), CarList()],
  );

  void _navigateToDetails(CarResponse car) {
    Navigator.of(context)
        .push(MaterialPageRoute(builder: (context) => CarDetailsScreen(car)));
  }
}