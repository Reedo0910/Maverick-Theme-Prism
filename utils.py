# -*- coding: utf-8 -*-
"""Utils for Prism
"""

import os
import json
from Maverick.Config import g_conf
from Maverick.Utils import unify_joinpath, safe_read, filterPlaceholders

translation = None

def tr(str, locale="english"):
    """translation support

    translate str according to translation file
    """
    global translation
    if translation is None:
        path = unify_joinpath(os.path.dirname(
            __file__) + '/locale', g_conf.language+".json")
        translation = json.loads(safe_read(path) or '{}')

    return translation.get(str, str)

def build_links(links):
    fp = filterPlaceholders
    str = ''.join(['<li><a class="no-link" title="%s" href="%s" target="_blank" rel="noopener noreferrer nofollow"><i class="%s"></i></a></li>'
                      % (fp(item['name']), fp(item['url']), fp(item['icon'])) for item in links])
    return '<ul>%s</ul>' % str


def build_navs(navs, activeUrl):
    fp = filterPlaceholders
    list = ['<li><a class="no-link text-uppercase %s" href="%s" target="%s">%s</a></li>'
            % (('link-active' if (fp(item['url']) == activeUrl) else ''), fp(item['url']), fp(item['target']), fp(item['name'])) for item in navs]
    list.append('<li><a href="#" target="_self" class="search-form-input no-link text-uppercase">%s</a></li>' % tr('Search'))
    return '<ul>%s</ul>' % (''.join(list))


def filterPrefix(url: str):
    """replace prefix with `/`, to fix Valine view counting
    """
    return url.replace(g_conf.site_prefix, "/")