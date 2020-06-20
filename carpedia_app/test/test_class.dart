import 'package:dart_ping/dart_ping.dart';
import 'package:flutter_test/flutter_test.dart';


void main() {
  test('tst', () async{
    var pings = await ping('192.168.43.228');

    pings.listen((data){
      print(data.time);

    },onError: (e){
      print(e);
    });
  });


}
