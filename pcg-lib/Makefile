BUILD_DIR := ./build
SRC_DIRS := ./src
EXT_DIR := ./external

$(BUILD_DIR)/pcg-lib:
	mkdir -p ./build
	g++ ./src/main.cpp -std=c++17 -I ./external/glm -I ./src -o ./build/pcg-lib

.PHONY: run
run:
	./build/pcg-lib

.PHONY: clean
clean:
	rm -r ./build
