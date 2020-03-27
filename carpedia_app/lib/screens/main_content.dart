import 'dart:async';
import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:carpediaapp/blocks/car_block.dart';
import 'package:carpediaapp/models/car_response.dart';
import 'package:carpediaapp/screens/car_details.dart';

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
      appBar: AppBar(
        title: Text('Carpedia app'),
      ),
      body: Form(
        child: Row(
          children: [
            Expanded(
              child: Padding(
                padding: EdgeInsets.only(left: 10.0),
                child: TextFormField(
                  controller: _searchController,
                  decoration: InputDecoration(
                    hintText: 'Search by model...',
                  ),
                ),
              ),
            ),
            IconButton(
              icon: Icon(Icons.search),
              onPressed: () {
                _carBloc.getCarForName(_searchController.text);
//                print(_carBloc.getCarForName(_searchController.text));
              },
            )
          ],
        ),
      ),
    );
  }

  void _navigateToDetails(CarResponse car) {
    Navigator.of(context).push(MaterialPageRoute(builder: (context) => CarDetailsScreen(car)));
  }
}
