from flask import Flask, request
import requests
import json

app = Flask(__name__)


@app.route('/api/getDistance', methods=['POST'])
def getDistance():
  obj = request.json
  print(obj)

  param = {
    "outputType": "json",
    "ellipsoid": "GRS80",
    "latitude1": obj["latitude1"],
    "longitude1": obj["longitude1"],
    "latitude2": obj["latitude2"],
    "longitude2": obj["longitude2"],
  }

  res = requests.get("https://vldb.gsi.go.jp/sokuchi/surveycalc/surveycalc/bl2st_calc.pl", params = param)
  return res.json()
