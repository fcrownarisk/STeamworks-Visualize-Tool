
typedef struct {
    double x, y, z, t; 
} Vector;

void printVector(const Vector *vec) {
    printf("(%lf, %lf, %lf, %lf)\n", vec->x, vec->y, vec->z, vec->t);
}

Vector addVectors(const Vector *v1, const Vector *v2) {
    Vector result;
    result.x = v1->x + v2->x;
    result.y = v1->y + v2->y;
    result.z = v1->z + v2->z;
    result.t = v1->t + v2->t;
    return result;
}
Vector subtractVectors(const Vector *v1, const Vector *v2) {
    Vector result;
    result.x = v1->x - v2->x;
    result.y = v1->y - v2->y;
    result.z = v1->z - v2->z;
    result.t = v1->t - v2->t;
    return result;
}
int main() {
    Vector event1 = {1.0, 2.0, 3.0, 4.0};
    Vector event2 = {5.0, 6.0, 7.0, 8.0};
    Vector diff = subtractVectors(&event1, &event2);
    printf("Event 1: ");
    printVector(&event1);
    printf("Event 2: ");
    printVector(&event2);
    printf("Difference: ");
    printVector(&diff);
    return 0;
}