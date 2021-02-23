{
  "targets": [
    {
        "target_name": "pcg-lib",
        "sources": ["./pcg-lib/hello.cpp"],
        "include_dirs": [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        "cflags!": ["-fno-exceptions"],
        "cflags_cc!": ["-fno-exceptions"],
        "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"],
    }
  ]
}