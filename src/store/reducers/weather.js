import actionType from './../../action/type';

let initialState = {
    location: '',
    isFetching: false,
    forecast: {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1577955600,
                "main": {
                    "temp": 8.16,
                    "feels_like": 4.93,
                    "temp_min": 6.86,
                    "temp_max": 8.16,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1018,
                    "humidity": 90,
                    "temp_kf": 1.3
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.49,
                    "deg": 184
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-02 09:00:00"
            },
            {
                "dt": 1577966400,
                "main": {
                    "temp": 10.22,
                    "feels_like": 6.9,
                    "temp_min": 9.25,
                    "temp_max": 10.22,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1016,
                    "humidity": 83,
                    "temp_kf": 0.97
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.9,
                    "deg": 203
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-02 12:00:00"
            },
            {
                "dt": 1577977200,
                "main": {
                    "temp": 10.16,
                    "feels_like": 5.4,
                    "temp_min": 9.51,
                    "temp_max": 10.16,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1013,
                    "humidity": 80,
                    "temp_kf": 0.65
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 5.76,
                    "deg": 213
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-02 15:00:00"
            },
            {
                "dt": 1577988000,
                "main": {
                    "temp": 10.05,
                    "feels_like": 5.23,
                    "temp_min": 9.73,
                    "temp_max": 10.05,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1012,
                    "humidity": 82,
                    "temp_kf": 0.32
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 5.92,
                    "deg": 223
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-02 18:00:00"
            },
            {
                "dt": 1577998800,
                "main": {
                    "temp": 10.38,
                    "feels_like": 5.41,
                    "temp_min": 10.38,
                    "temp_max": 10.38,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1010,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.25,
                    "deg": 214
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-02 21:00:00"
            },
            {
                "dt": 1578009600,
                "main": {
                    "temp": 10.81,
                    "feels_like": 5.97,
                    "temp_min": 10.81,
                    "temp_max": 10.81,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1009,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.57,
                    "deg": 212
                },
                "rain": {
                    "3h": 0.63
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-03 00:00:00"
            },
            {
                "dt": 1578020400,
                "main": {
                    "temp": 10.15,
                    "feels_like": 5.49,
                    "temp_min": 10.15,
                    "temp_max": 10.15,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1008,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.73,
                    "deg": 240
                },
                "rain": {
                    "3h": 1.75
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-03 03:00:00"
            },
            {
                "dt": 1578031200,
                "main": {
                    "temp": 9.63,
                    "feels_like": 5.43,
                    "temp_min": 9.63,
                    "temp_max": 9.63,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1009,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 5.19,
                    "deg": 238
                },
                "rain": {
                    "3h": 0.06
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-03 06:00:00"
            },
            {
                "dt": 1578042000,
                "main": {
                    "temp": 9.28,
                    "feels_like": 3.62,
                    "temp_min": 9.28,
                    "temp_max": 9.28,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1013,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.55,
                    "deg": 313
                },
                "rain": {
                    "3h": 0.06
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-03 09:00:00"
            },
            {
                "dt": 1578052800,
                "main": {
                    "temp": 7.42,
                    "feels_like": 2.45,
                    "temp_min": 7.42,
                    "temp_max": 7.42,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1019,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.4,
                    "deg": 351
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-03 12:00:00"
            },
            {
                "dt": 1578063600,
                "main": {
                    "temp": 7.21,
                    "feels_like": 2.02,
                    "temp_min": 7.21,
                    "temp_max": 7.21,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1023,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 46
                },
                "wind": {
                    "speed": 4.09,
                    "deg": 332
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-03 15:00:00"
            },
            {
                "dt": 1578074400,
                "main": {
                    "temp": 6.24,
                    "feels_like": 1.91,
                    "temp_min": 6.24,
                    "temp_max": 6.24,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1026,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 23
                },
                "wind": {
                    "speed": 3.42,
                    "deg": 289
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-03 18:00:00"
            },
            {
                "dt": 1578085200,
                "main": {
                    "temp": 5.52,
                    "feels_like": 1.17,
                    "temp_min": 5.52,
                    "temp_max": 5.52,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1028,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 3.44,
                    "deg": 286
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-03 21:00:00"
            },
            {
                "dt": 1578096000,
                "main": {
                    "temp": 4.78,
                    "feels_like": 0.46,
                    "temp_min": 4.78,
                    "temp_max": 4.78,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1029,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 3.45,
                    "deg": 264
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-04 00:00:00"
            },
            {
                "dt": 1578106800,
                "main": {
                    "temp": 4.73,
                    "feels_like": 0.21,
                    "temp_min": 4.73,
                    "temp_max": 4.73,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1028,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 254
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-04 03:00:00"
            },
            {
                "dt": 1578117600,
                "main": {
                    "temp": 4.72,
                    "feels_like": 0.64,
                    "temp_min": 4.72,
                    "temp_max": 4.72,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1029,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 3.3,
                    "deg": 255
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-04 06:00:00"
            },
            {
                "dt": 1578128400,
                "main": {
                    "temp": 4.7,
                    "feels_like": 0.53,
                    "temp_min": 4.7,
                    "temp_max": 4.7,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1030,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 46
                },
                "wind": {
                    "speed": 3.58,
                    "deg": 261
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-04 09:00:00"
            },
            {
                "dt": 1578139200,
                "main": {
                    "temp": 7.06,
                    "feels_like": 2.28,
                    "temp_min": 7.06,
                    "temp_max": 7.06,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1030,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 4.33,
                    "deg": 284
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-04 12:00:00"
            },
            {
                "dt": 1578150000,
                "main": {
                    "temp": 7.29,
                    "feels_like": 2.6,
                    "temp_min": 7.29,
                    "temp_max": 7.29,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1029,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 4.06,
                    "deg": 286
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-04 15:00:00"
            },
            {
                "dt": 1578160800,
                "main": {
                    "temp": 7.11,
                    "feels_like": 3.51,
                    "temp_min": 7.11,
                    "temp_max": 7.11,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1030,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 2.52,
                    "deg": 269
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-04 18:00:00"
            },
            {
                "dt": 1578171600,
                "main": {
                    "temp": 6.81,
                    "feels_like": 3.82,
                    "temp_min": 6.81,
                    "temp_max": 6.81,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1029,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.82,
                    "deg": 248
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-04 21:00:00"
            },
            {
                "dt": 1578182400,
                "main": {
                    "temp": 6.9,
                    "feels_like": 3.27,
                    "temp_min": 6.9,
                    "temp_max": 6.9,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1029,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 244
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-05 00:00:00"
            },
            {
                "dt": 1578193200,
                "main": {
                    "temp": 6.75,
                    "feels_like": 2.94,
                    "temp_min": 6.75,
                    "temp_max": 6.75,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1028,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.97,
                    "deg": 244
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-05 03:00:00"
            },
            {
                "dt": 1578204000,
                "main": {
                    "temp": 6.23,
                    "feels_like": 2.36,
                    "temp_min": 6.23,
                    "temp_max": 6.23,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1028,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 3.04,
                    "deg": 232
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-05 06:00:00"
            },
            {
                "dt": 1578214800,
                "main": {
                    "temp": 6.62,
                    "feels_like": 3.12,
                    "temp_min": 6.62,
                    "temp_max": 6.62,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1027,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.55,
                    "deg": 221
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-05 09:00:00"
            },
            {
                "dt": 1578225600,
                "main": {
                    "temp": 8.29,
                    "feels_like": 4.19,
                    "temp_min": 8.29,
                    "temp_max": 8.29,
                    "pressure": 1031,
                    "sea_level": 1031,
                    "grnd_level": 1027,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 232
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-05 12:00:00"
            },
            {
                "dt": 1578236400,
                "main": {
                    "temp": 8.1,
                    "feels_like": 4.46,
                    "temp_min": 8.1,
                    "temp_max": 8.1,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1026,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.95,
                    "deg": 230
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-05 15:00:00"
            },
            {
                "dt": 1578247200,
                "main": {
                    "temp": 7.63,
                    "feels_like": 4.1,
                    "temp_min": 7.63,
                    "temp_max": 7.63,
                    "pressure": 1029,
                    "sea_level": 1029,
                    "grnd_level": 1025,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.77,
                    "deg": 219
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-05 18:00:00"
            },
            {
                "dt": 1578258000,
                "main": {
                    "temp": 7.33,
                    "feels_like": 3.28,
                    "temp_min": 7.33,
                    "temp_max": 7.33,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1024,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.64,
                    "deg": 219
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-05 21:00:00"
            },
            {
                "dt": 1578268800,
                "main": {
                    "temp": 5.78,
                    "feels_like": 1.5,
                    "temp_min": 5.78,
                    "temp_max": 5.78,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1022,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 3.65,
                    "deg": 201
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-06 00:00:00"
            },
            {
                "dt": 1578279600,
                "main": {
                    "temp": 6.14,
                    "feels_like": 1.52,
                    "temp_min": 6.14,
                    "temp_max": 6.14,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1020,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 4.18,
                    "deg": 199
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-06 03:00:00"
            },
            {
                "dt": 1578290400,
                "main": {
                    "temp": 5.69,
                    "feels_like": 0.78,
                    "temp_min": 5.69,
                    "temp_max": 5.69,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1016,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 4.62,
                    "deg": 193
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-06 06:00:00"
            },
            {
                "dt": 1578301200,
                "main": {
                    "temp": 5.36,
                    "feels_like": 0.04,
                    "temp_min": 5.36,
                    "temp_max": 5.36,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1013,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 5.25,
                    "deg": 184
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-06 09:00:00"
            },
            {
                "dt": 1578312000,
                "main": {
                    "temp": 7.5,
                    "feels_like": 1.09,
                    "temp_min": 7.5,
                    "temp_max": 7.5,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1009,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 6.66,
                    "deg": 199
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-06 12:00:00"
            },
            {
                "dt": 1578322800,
                "main": {
                    "temp": 7.32,
                    "feels_like": 0.96,
                    "temp_min": 7.32,
                    "temp_max": 7.32,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1005,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.04,
                    "deg": 196
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2020-01-06 15:00:00"
            },
            {
                "dt": 1578333600,
                "main": {
                    "temp": 9.29,
                    "feels_like": 3.86,
                    "temp_min": 9.29,
                    "temp_max": 9.29,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1001,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.84,
                    "deg": 201
                },
                "rain": {
                    "3h": 2.44
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-06 18:00:00"
            },
            {
                "dt": 1578344400,
                "main": {
                    "temp": 8.62,
                    "feels_like": 2.45,
                    "temp_min": 8.62,
                    "temp_max": 8.62,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1004,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.84,
                    "deg": 274
                },
                "rain": {
                    "3h": 1
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-06 21:00:00"
            },
            {
                "dt": 1578355200,
                "main": {
                    "temp": 7.09,
                    "feels_like": 1.51,
                    "temp_min": 7.09,
                    "temp_max": 7.09,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1009,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 5.58,
                    "deg": 271
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-07 00:00:00"
            },
            {
                "dt": 1578366000,
                "main": {
                    "temp": 6.58,
                    "feels_like": 1.51,
                    "temp_min": 6.58,
                    "temp_max": 6.58,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1012,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.96,
                    "deg": 270
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-07 03:00:00"
            },
            {
                "dt": 1578376800,
                "main": {
                    "temp": 5.85,
                    "feels_like": 1.57,
                    "temp_min": 5.85,
                    "temp_max": 5.85,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1015,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 3.62,
                    "deg": 262
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2020-01-07 06:00:00"
            }
        ],
        "city": {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "country": "GB",
            "timezone": 0,
            "sunrise": 1577952365,
            "sunset": 1577980925
        }
    },
    msg: ''
}

let weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload.location
            };
        case actionType.START_SEARCH:
            return {
                ...state,
                isFetching: true
            };
        case actionType.UPDATE_FORECAST:
            return {
                ...state,
                forecast: action.payload.forecast,
                isFetching: false
            };
        default:
            return state;
    }
}

export default weatherReducer;