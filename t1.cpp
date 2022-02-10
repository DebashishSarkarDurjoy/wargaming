
#include <iostream>
#include <vector>
using namespace std;


int solution(vector<int> &A) {
    int ans = 0;
    int current = A[0];
    for (int i = 0; (current != -1) && (i < A.size()); i++) {
        ans++;
        current = A[current];
    }
    ans++;
    return ans;
}

int main(void) {
    vector<int> A = {1, 4, 3, -1, 2};

    cout << solution(A) << endl;

    return 0;
}
