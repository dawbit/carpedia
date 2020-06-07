// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_data_base.dart';

// **************************************************************************
// FloorGenerator
// **************************************************************************

class $FloorAppDatabase {
  /// Creates a database builder for a persistent database.
  /// Once a database is built, you should keep a reference to it and re-use it.
  static _$AppDatabaseBuilder databaseBuilder(String name) =>
      _$AppDatabaseBuilder(name);

  /// Creates a database builder for an in memory database.
  /// Information stored in an in memory database disappears when the process is killed.
  /// Once a database is built, you should keep a reference to it and re-use it.
  static _$AppDatabaseBuilder inMemoryDatabaseBuilder() =>
      _$AppDatabaseBuilder(null);
}

class _$AppDatabaseBuilder {
  _$AppDatabaseBuilder(this.name);

  final String name;

  final List<Migration> _migrations = [];

  Callback _callback;

  /// Adds migrations to the builder.
  _$AppDatabaseBuilder addMigrations(List<Migration> migrations) {
    _migrations.addAll(migrations);
    return this;
  }

  /// Adds a database [Callback] to the builder.
  _$AppDatabaseBuilder addCallback(Callback callback) {
    _callback = callback;
    return this;
  }

  /// Creates the database and initializes it.
  Future<AppDatabase> build() async {
    final path = name != null
        ? await sqfliteDatabaseFactory.getDatabasePath(name)
        : ':memory:';
    final database = _$AppDatabase();
    database.database = await database.open(
      path,
      _migrations,
      _callback,
    );
    return database;
  }
}

class _$AppDatabase extends AppDatabase {
  _$AppDatabase([StreamController<String> listener]) {
    changeListener = listener ?? StreamController<String>.broadcast();
  }

  FavouriteCarDao _favouriteCarDaoInstance;

  Future<sqflite.Database> open(String path, List<Migration> migrations,
      [Callback callback]) async {
    final databaseOptions = sqflite.OpenDatabaseOptions(
      version: 1,
      onConfigure: (database) async {
        await database.execute('PRAGMA foreign_keys = ON');
      },
      onOpen: (database) async {
        await callback?.onOpen?.call(database);
      },
      onUpgrade: (database, startVersion, endVersion) async {
        await MigrationAdapter.runMigrations(
            database, startVersion, endVersion, migrations);

        await callback?.onUpgrade?.call(database, startVersion, endVersion);
      },
      onCreate: (database, version) async {
        await database.execute(
            'CREATE TABLE IF NOT EXISTS `FavouriteCar` (`id` INTEGER, `mark` TEXT, `model` TEXT, `country` TEXT, `startProduction` TEXT, `endProduction` TEXT, `bodyType` TEXT, `ncapStars` INTEGER, `photo` TEXT, PRIMARY KEY (`id`))');

        await callback?.onCreate?.call(database, version);
      },
    );
    return sqfliteDatabaseFactory.openDatabase(path, options: databaseOptions);
  }

  @override
  FavouriteCarDao get favouriteCarDao {
    return _favouriteCarDaoInstance ??=
        _$FavouriteCarDao(database, changeListener);
  }
}

class _$FavouriteCarDao extends FavouriteCarDao {
  _$FavouriteCarDao(this.database, this.changeListener)
      : _queryAdapter = QueryAdapter(database),
        _favouriteCarInsertionAdapter = InsertionAdapter(
            database,
            'FavouriteCar',
            (FavouriteCar item) => <String, dynamic>{
                  'id': item.id,
                  'mark': item.mark,
                  'model': item.model,
                  'country': item.country,
                  'startProduction': item.startProduction,
                  'endProduction': item.endProduction,
                  'bodyType': item.bodyType,
                  'ncapStars': item.ncapStars,
                  'photo': item.photo
                }),
        _favouriteCarDeletionAdapter = DeletionAdapter(
            database,
            'FavouriteCar',
            ['id'],
            (FavouriteCar item) => <String, dynamic>{
                  'id': item.id,
                  'mark': item.mark,
                  'model': item.model,
                  'country': item.country,
                  'startProduction': item.startProduction,
                  'endProduction': item.endProduction,
                  'bodyType': item.bodyType,
                  'ncapStars': item.ncapStars,
                  'photo': item.photo
                });

  final sqflite.DatabaseExecutor database;

  final StreamController<String> changeListener;

  final QueryAdapter _queryAdapter;

  static final _favouriteCarMapper = (Map<String, dynamic> row) => FavouriteCar(
      id: row['id'] as int,
      model: row['model'] as String,
      photo: row['photo'] as String,
      ncapStars: row['ncapStars'] as int,
      bodyType: row['bodyType'] as String,
      country: row['country'] as String,
      mark: row['mark'] as String,
      endProduction: row['endProduction'] as String,
      startProduction: row['startProduction'] as String);

  final InsertionAdapter<FavouriteCar> _favouriteCarInsertionAdapter;

  final DeletionAdapter<FavouriteCar> _favouriteCarDeletionAdapter;

  @override
  Future<List<FavouriteCar>> findAllCars() async {
    return _queryAdapter.queryList('SELECT * FROM FavouriteCar',
        mapper: _favouriteCarMapper);
  }

  @override
  Future<void> deleteFavouriteCarxd() async {
    await _queryAdapter.queryNoReturn('DELETE FROM FavouriteCar where id > 0');
  }

  @override
  Future<FavouriteCar> checkIfPositionExists(int id) async {
    return _queryAdapter.query('SELECT * FROM FavouriteCar where id = ?',
        arguments: <dynamic>[id], mapper: _favouriteCarMapper);
  }

  @override
  Future<void> insertFavouriteCar(FavouriteCar car) async {
    await _favouriteCarInsertionAdapter.insert(car, OnConflictStrategy.abort);
  }

  @override
  Future<void> deleteFavouriteCar(FavouriteCar car) async {
    await _favouriteCarDeletionAdapter.delete(car);
  }
}
