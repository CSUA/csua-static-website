#!/usr/bin/env python3
import sys
import csv
import codecs
import argparse

try:
    import yaml
except ImportError:
    print("You must install PyYaml")
    sys.exit(1)

parser = argparse.ArgumentParser()
parser.add_argument("-o", "--output", default="")
parser.add_argument("-i", "--input", default="")
args = parser.parse_args()

if args.input:
    args.input = open(args.input, "r")
else:
    args.input = sys.stdin

if args.output:
    args.output = open(args.output, "w")
else:
    args.output = sys.stdout

reader = csv.reader(args.input)
keys = next(reader)
yaml.dump(
    [dict(zip(keys, row)) for row in reader],
    stream=args.output,
    default_flow_style=False,
    allow_unicode=True,
)
