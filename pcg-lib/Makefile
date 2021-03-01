BUILD_DIR := ./build
SRC_DIRS := ./src
EXT_DIR := ./external

$(BUILD_DIR)/ray-tracer:
	mkdir -p ./build
	g++ ./src/main.cpp -I ./external/glm -I ./src -o ./build/pcg-lib

.PHONY: run
run:
	./build/pcg-lib

.PHONY: clean
clean:
	rm -r ./build
