#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int solution(string &A, string &B) {
    unordered_map<char, int> umap_A;
    unordered_map<char, int> umap_B;

    for (char c : A) {
        umap_A[c]++;
    }
    for (char c : B) {
        umap_B[c]++;
    }

    // for checking if the maps are formed properly
    // for (auto c: umap_A) {
    //     cout << c.first << endl;
    // }

    int count_A = 0;
    for (auto c : umap_B) {
        if ( (umap_A.find(c.first) == umap_A.end()) ) {
            count_A = umap_B[c.first] + count_A;
        }
        else if ( (umap_A[c.first] != umap_B[c.first]) && (umap_A[c.first] < umap_B[c.first]) ) {
            count_A = count_A + (umap_B[c.first] - umap_A[c.first]) ;
        }
    }
    int count_B = 0;
    for (auto c : umap_A) {
        if ( (umap_B.find(c.first) == umap_B.end()) ) {
            count_B = umap_A[c.first] + count_B;
        }
        else if( (umap_B[c.first] != umap_A[c.first]) && (umap_B[c.first] < umap_A[c.first]) ) {
            // cout << c.first << endl;
            count_B = count_B + (umap_A[c.first] - umap_B[c.first]);
        }
    }
    // for debugging
    //cout << "A " << count_A << "    " << "B " << count_B << endl;
    return count_A + count_B;
}


int main(void) {
    string A = "rather";
    string B = "harder";

    cout << solution(A, B) << endl;

    return 0;
}
