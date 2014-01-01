/**
 * @license A LZW encoding/decoding library for JavaScript, heavily borrowed
 * from several open-source code examples, and reformatted into a library
 * similar to how the JSON library implementations work.
 *
 * On GitHub: https://github.com/psyked/LZW-js
 *
 * Copyright (C) 2014 James Ford <jford@psyked.co.uk>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 * USA
 *
 * @type {LZW|*|{encode: encode, encodeObject: encodeObject, decode: decode, decodeObject: decodeObject}}
 */
var LZW = window.LZW || {
    encode: function encode(s) {
        var dict = {};
        var data = (s + "").split("");
        var out = [];
        var currChar;
        var phrase = data[0];
        var code = 256;
        var i, l;
        for (i = 1, l = data.length; i < l; i++) {
            currChar = data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase = currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (i = 0, l = out.length; i < l; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
    },
    encodeObject: function encodeObject(obj) {
        var encodedObject = JSON.encode(obj);
        return this.encode(encodedObject);
    },
    decode: function decode(s) {
        var dict = {};
        var data = (s + "").split("");
        var currChar = data[0];
        var oldPhrase = currChar;
        var out = [currChar];
        var code = 256;
        var phrase;
        for (var i = 1; i < data.length; i++) {
            var currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            }
            else {
                phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out.push(phrase);
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    },
    decodeObject: function decodeObject(str) {
        var decodedString = this.decode(str);
        return JSON.decode(decodedString);
    }
};
window['LZW'] = LZW;