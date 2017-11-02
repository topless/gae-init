# coding: utf-8

from __future__ import absolute_import

import flask_restful
from main import api_v1


@api_v1.resource('/test/', endpoint='api.test')
class TestAPI(flask_restful.Resource):
  def get(self):
    return {
      'one': 'there is a value',
      'two': 'another one'
    }
