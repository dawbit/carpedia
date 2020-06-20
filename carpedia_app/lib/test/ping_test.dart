import 'package:dart_ping/dart_ping.dart';
import 'package:flutter_test/flutter_test.dart';

class PingTest{


  Future<void> test() async {
    var pings = await ping('192.168.43.228:8080', times: 10, interval: 1, packetSize: 64);

    pings.listen((ping) {
      print('jebac disa ${ping.time.inMilliseconds}');
    });
  }
}