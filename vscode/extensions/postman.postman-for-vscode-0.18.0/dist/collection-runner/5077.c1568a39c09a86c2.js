"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[5077],{55077:(e,o,t)=>{t.d(o,{default:()=>n});const n='{"files":[{"filename":"book.proto","content":"syntax = \\"proto3\\";package com.book;message Book {    int64 isbn = 1;    string title = 2;    string author = 3;}message GetBookRequest {    int64 isbn = 1;}message GetBookViaAuthor {    string author = 1;}service BookService {    rpc GetBook (GetBookRequest) returns (Book) {}    rpc GetBooksViaAuthor (GetBookViaAuthor) returns (stream Book) {}    rpc GetGreatestBook (stream GetBookRequest) returns (Book) {}    rpc GetBooks (stream GetBookRequest) returns (stream Book) {}}message BookStore {    string name = 1;    map<int64, string> books = 2;}enum EnumSample {    option allow_alias = true;    UNKNOWN = 0;    STARTED = 1;    RUNNING = 1;}","isRoot":true}],"descriptor":{"nested":{"com":{"nested":{"book":{"nested":{"Book":{"fields":{"isbn":{"type":"int64","id":1,"comment":null},"title":{"type":"string","id":2,"comment":null},"author":{"type":"string","id":3,"comment":null}},"comment":null},"GetBookRequest":{"fields":{"isbn":{"type":"int64","id":1,"comment":null}},"comment":null},"GetBookViaAuthor":{"fields":{"author":{"type":"string","id":1,"comment":null}},"comment":null},"BookService":{"methods":{"GetBook":{"requestType":"GetBookRequest","responseType":"Book","comment":null},"GetBooksViaAuthor":{"requestType":"GetBookViaAuthor","responseType":"Book","responseStream":true,"comment":null},"GetGreatestBook":{"requestType":"GetBookRequest","requestStream":true,"responseType":"Book","comment":null},"GetBooks":{"requestType":"GetBookRequest","requestStream":true,"responseType":"Book","responseStream":true,"comment":null}},"comment":null},"BookStore":{"fields":{"name":{"type":"string","id":1,"comment":null},"books":{"keyType":"int64","type":"string","id":2,"comment":null}},"comment":null},"EnumSample":{"options":{"allow_alias":true},"values":{"UNKNOWN":0,"STARTED":1,"RUNNING":1},"comment":null,"comments":{"UNKNOWN":null,"STARTED":null,"RUNNING":null}}}}}}}}}'}}]);
//# sourceMappingURL=5077.c1568a39c09a86c2.js.map