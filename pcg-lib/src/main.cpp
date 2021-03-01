#include <iostream>
#include "glm/glm.hpp"

int main() {
    std::cout << "Hello World!" << std::endl;
    std::cout << glm::distance(glm::vec3(2.0f, 1.0f, 0.5f), glm::vec3(-2.0f, 1.0f, 0.0f)) << std::endl;
    return 0;
}