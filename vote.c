#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Required CGI header
    printf("Content-type: text/html\n\n");

    // Print HTML response
    printf("<html><head><title>Vote Confirmation</title></head><body>");
    printf("<h2>Your vote has been recorded successfully!</h2>");
    printf("</body></html>");

    return 0;
}
