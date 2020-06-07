import 'package:bloc_pattern/bloc_pattern.dart';
import 'package:carpediaapp/blocs/car_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SearchInput extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => SearchInputState();
}

class SearchInputState extends State<SearchInput> {
  TextEditingController _searchController;

  CarBloc _carBloc;

  @override
  void initState() {
    super.initState();
    _carBloc= BlocProvider.getBloc();
    _searchController = TextEditingController();
  }

  @override
  Widget build(BuildContext context) {
    return Form(
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
              print(_searchController.text);
              _carBloc.getCarForName(_searchController.text);
              _carBloc.getCarForCompany(_searchController.text);
            },
          ),
        ],
      ),
    );
  }
}