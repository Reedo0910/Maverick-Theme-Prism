# -*- coding: utf-8 -*-
"""Prism

Theme for Maverick
"""

import re
import os
import json
from Maverick.Config import g_conf
from Maverick.Router import Router
from Maverick.Utils import unify_joinpath, safe_read
from Maverick.Utils import filterPlaceholders


static_files = {
    "assets": "assets",
    "misc": ""
}

g_translation = None

def tr(str, locale="english"):
    """translation support

    translate str according to translation file
    """
    global g_translation
    if g_translation is None:
        path = unify_joinpath(os.path.dirname(
            __file__) + '/locale', g_conf.language+".json")
        g_translation = json.loads(safe_read(path) or '{}')

    return g_translation.get(str, str)

def build_links(links):
    fp = filterPlaceholders
    str = ''.join(['<li><a class="no-link" title="%s" href="%s" target="_blank"><i class="%s"></i></a></li>'
                      % (fp(item['name']), fp(item['url']), fp(item['icon'])) for item in links])
    return '<ul>%s</ul>' % str


def build_navs(navs):
    fp = filterPlaceholders
    list = ['<li><a class="no-link text-uppercase" href="%s" target="%s">%s</a></li>'
            % (fp(item['url']), fp(item['target']), fp(item['name'])) for item in navs]
    list.append('<li><a href="#" target="_self" class="search-form-input no-link text-uppercase">%s</a></li>' % tr('Search'))
    return '<ul>%s</ul>' % (''.join(list))


"""theme_globals will be injected to jinja env, so can be used when rendering
"""
theme_globals = {
    "len": len,
    "build_links": build_links,
    "build_navs": build_navs,
    "tr": tr
}
